const mongoose = require("mongoose");
const _ = require("lodash");

class MongoFuncHelper {
	/** Create entity model
	 * @output object model created
	 * @param model current model working
	 * @param entParam object entity model need to create*/
	async $save(model, entParam) {
		return model.create(entParam);
	}

	/** Update entity model
	 * @output object model created
	 * @param model current model working
	 * @param conditionObj object use to filter record need to update
	 * @param newObj object entity model was set value need to update
	 * */
	async $updateOne(model, conditionObj, newObj) {
		const result = await model.updateOne(conditionObj, newObj);
		/** Wrapper data return from version 6 to old version which services using */
		return {
			ok: result.acknowledged ? 1 : 0,
			n: result.matchedCount,
			nModified: result.modifiedCount,
		}
	}

	/** Update entity model
	 * @output object model created
	 * @param model current model working
	 * @param filterObj object use to filter record need to update
	 * @param setObj object entity model was set value need to update
	 * */
	async $updateSet(model, filterObj, setObj) {
		const result = await model.updateOne(filterObj, setObj);
		/** Wrapper data return from version 6 to old version 5 which services using */
		return {
			ok: result.acknowledged ? 1 : 0,
			n: result.matchedCount,
			nModified: result.modifiedCount,
		}
	}

	/** Since upsert creates a document if not finds a document, you don't need to create another one manually.
	 *
	 * @param {*} model current model working
	 * @param {*} entParam object entity model need to create or update
	 * @param filter
	 * @returns
	 */
	async $findOneAndUpdateOrCreate(model, entParam, filter = {}) {
		const options = { upsert: true, new: true,useFindAndModify: false, setDefaultsOnInsert: true };
		return await model.findOneAndUpdate(filter, entParam, options);
	}

	/** Get all entity model
	 * @output array entity model
	 * @param model current model working
	 * @param filter object contains filter props
	 * @param sort object contains sort props
	 * @param select object contains props name need to get*/
	async $getAll(model, filter = {}, sort = {}, select = {}) {
		return await model.find(filter, select).sort(sort).lean();
	}

	/** Get detail entity model
	 * @output object entity model
	 * @param model current model working
	 * @param _id entity model
	 * @param isWithOutCheckDelete type boolean
	 * @param select object contains props name need to get*/
	async $getById(model, _id, isWithOutCheckDelete = false, select = {}) {
		try {
			let id = "";
			if (mongoose.isValidObjectId(_id) && typeof _id === "object") {
				id = _id;
			} else if (mongoose.isValidObjectId(_id) && typeof _id === "string") {
				id = this.convertToMongoId(_id);
			}
			const result = await model.findById(id, select);
			if (!result || _.isEmpty(result)) {
				return {};
			}
			const data = result.toObject();
			if (data && data.isDelete && !isWithOutCheckDelete) {
				return {};
			}
			return data ? data : {};
		} catch (e) {
			return null;
		}
	}

	/** Get list entity model- usually use for mobile app logic
	 * @output array entity model
	 * @param model current model working
	 * @param query object contains query props
	 * @param sort object contains sort props
	 * @param skip int number records will skip
	 * @param limit int number records need to get
	 * @param select object contains props name need to get*/
	async $list(model, query = {}, sort = {}, skip = 0, limit = 20, select = {}) {
		let result = [];
		skip = Number.parseInt(skip, 10);
		limit = Number.parseInt(limit, 10);
		if (Number.isNaN(skip)) {
			skip = 0;
		}
		if (Number.isNaN(limit)) {
			limit = 20;
		}
		if (!skip || skip < 0) {
			skip = 0;
		}
		if (!limit || limit < 1 || limit > 1000) {
			limit = 20;
		}
		result = await model.find(query, select)
			.sort(sort)
			.skip(skip)
			.limit(limit)
			.lean();
		return result;
	}

	/** Get list entity model paging - usually use for web portal logic
	 * @output array entity model
	 * @param model current model working
	 * @param query object contains query props
	 * @param sort object contains sort props
	 * @param pageIndex int current page
	 * @param limit int number records need to get every page
	 * @param select object contains props name need to get*/
	async $listPaging(model, query = {}, sort = {}, pageIndex = 0, limit = 20, select = {}) {
		pageIndex = Number.parseInt(pageIndex, 10);
		limit = Number.parseInt(limit, 10);
		if (Number.isNaN(pageIndex)) {
			pageIndex = 0;
		}
		if (Number.isNaN(limit)) {
			limit = 20;
		}
		pageIndex = pageIndex >= 1 ? pageIndex - 1 : 0;
		if (!pageIndex || pageIndex < 0) {
			pageIndex = 0;
		}
		if (!limit || limit < 0 || limit > 1000) {
			limit = 20;
		}
		const options = {
			select,
			offset: pageIndex * limit,
			limit,
			sort
		};
		return await model.paginate(query, options);
	}

	/** Find a entity model
	 * @output object entity model
	 * @param model current model working
	 * @param filter object contains query props
	 * @param isWithOutCheckDelete type boolean
	 * @param select object contains props name need to get*/
	async $findOne(model, filter, isWithOutCheckDelete = false, select = {}) {
		if (!isWithOutCheckDelete) {
			filter.isDelete = { $ne: true }
		}
		let result = await model.findOne(filter, select);
		if (!result || _.isEmpty(result)) {
			return {};
		}
		const data = result.toObject();
		if (data && data.isDelete && !isWithOutCheckDelete) {
			return {};
		}
		return data ? data : {};
	}

	/** Find a entity model with sorting
	 * @output object entity model
	 * @param model current model working
	 * @param filter object contains query props
	 * @param isWithOutCheckDelete type boolean
	 * @param sorting sorting object
	 * @param select object contains props name need to get*/
	async $findOneAndSort(model, filter, isWithOutCheckDelete = false, sorting = {}, select = {}) {
		let result = await model.findOne(filter, select).sort(sorting);
		if (!result || _.isEmpty(result)) {
			return {};
		}
		const data = result.toObject();
		if (data && data.isDelete && !isWithOutCheckDelete) {
			return {};
		}
		return data ? data : {};
	}

	/** Get lastest item with
	 * @output object entity model
	 * @param model current model working*/
	async $getLastItem(model){
		let result = await model.findOne({}).sort({_id: -1});
		if (!result || _.isEmpty(result)) {
			return {};
		}
		const data = result.toObject();
		if (data && data.isDelete) {
			return {};
		}
		return data ? data : {};
	}

	/** Get list entity model
	 * @output array entity model
	 * @param model is current model working
	 * @param aggregateFilters is array contains query aggregate props*/
	async $aggregate(model, aggregateFilters = []) {
		return model.aggregate(aggregateFilters);
	}

	/** Get a object paging list entity model
	 * @output array entity model
	 * @param model is current model working
	 * @param aggregateFilters is array contains query aggregate props
	 * @param options is object as: {page, limit, sort}*/
	async $aggregatePaging(model, aggregateFilters = [], options = {page: 1, limit: 10}) {
		const aggregate = await model.aggregate(aggregateFilters);
		return model.aggregatePaginate(aggregate, options);
	}

	/** Get a list entity model
	 * @output array entity model
	 * @param model is current model working
	 * @param listId is array _id
	 * @param sort is object contain sorting props
	 * @param select is object contain props name need to get*/
	async $findByListId(model, listId, sort = {}, select = {}) {
		return await model.find(
			{_id: {$in: listId.map((id) => mongoose.Types.ObjectId(id))}}, select
		).sort(sort).lean();
	}

	/** Set isActive prop of a entity model
	 * @output object mongo result updating
	 * @param model is current model
	 * @param _id is _id of entity model need to get
	 * @param isActive is value need to update*/
	async $setIsActive(model, _id, isActive) {
		const result = await model.updateOne({_id}, {$set: {isActive}});
		/** Wrapper data return from version 6 to old version 5 which services using */
		return {
			ok: result.acknowledged ? 1 : 0,
			n: result.matchedCount,
			nModified: result.modifiedCount,
		}
	}

	/** Set isDelete prop of a entity model
	 * @output object mongo result updating
	 * @param model is current model
	 * @param _id is _id of entity model need to get
	 * @param isDelete is value need to update*/
	async $setIsDelete(model, _id, isDelete) {
		const result = await model.updateOne({_id}, {$set: {isDelete}});
		/** Wrapper data return from version 6 to old version 5 which services using */
		return {
			ok: result.acknowledged ? 1 : 0,
			n: result.matchedCount,
			nModified: result.modifiedCount,
		}
	}

	/** Get a entity model via code prop
	 * @output object entity model
	 * @param model is current model
	 * @param code is value need to query
	 * @param select is object contain props name need to get
	 * @param isWithOutCheckDelete type boolean*/
	async $getByCode(model, code, select = {}, isWithOutCheckDelete = false) {
		const filter = {
			code: new RegExp(`^${code}$`, "i")
		};
		const result = await model.findOne(filter, select);
		if (!result || _.isEmpty(result)) {
			return {};
		}
		const data = result.toObject();
		if (data && data.isDelete && !isWithOutCheckDelete) {
			return {};
		}
		return data ? data : {};
	}

	/** Get list entity model were set isDelete is true
	 * @output list object entity model
	 * @param model is current model
	 * @param filter object contains more query props
	 * @param sort object contains sort props*/
	async $getAllDeleteItems(model, filter = {}, sort = {}) {
		filter.isDelete = true;
		return await model.find(filter, sort).lean();
	}

	/** Count number of entity model
	 * @output number records entity model
	 * @param model is current model working
	 * @param filter is contain query props*/
	async $count(model, filter = {}) {
		return await model.count(filter);
	}

	/** Create many entity model
	 * @output object model created
	 * @param model current model working
	 * @param listItem list object entity model need to create*/
	async $saveMany(model, listItem) {
		return await model.insertMany(listItem);
	}

	/** Update many entity model
	 * @output object model created
	 * @param model current model working
	 * @param filterObj object filter
	 * @param setObj object update
	 * @param options object*/
	async $updateMany(model, filterObj, setObj, options = {}) {
		const result = await model.updateMany(filterObj, setObj, options);
		/** Wrapper data return from version 6 to old version which services using */
		return {
			ok: result.acknowledged ? 1 : 0,
			n: result.matchedCount,
			nModified: result.modifiedCount,
		}
	}

	/** Convert value to mongoId
	 * @output array _id or _id
	 * @param params array value or string value*/
	convertToMongoId(params) {
		if (_.isArray(params)) {
			return params.map((id) => new mongoose.Types.ObjectId(id));
		} if (_.isString(params)) {
			return new mongoose.Types.ObjectId(params);
		}
		return params;
	}

	/** Update many entity model
	 * @output object result updating
	 * @param model current model working
	 * @param filterObj object filter
	 * @param setObj object update
	 * @param options object: {arrayFilters = []} */
	async $findOneAndUpdate(model, filterObj, setObj, options = {}) {
		// FindOneAndUpdate result affected by caller via property options
		return await model.findOneAndUpdate(filterObj, setObj, options);
	}

	/** Delete many entity model
	 * @output object result deleting
	 * @param model current model working
	 * @param filterObj object filter
	 * @param options */
	async $deleteMany(model, filterObj, options = {}) {
		const result = await model.deleteMany(filterObj, options);
		/** Wrapper data return from version 6 to old version which services using */
		return { n: result.acknowledged ? 1 : 0, ok: result.acknowledged ? 1 : 0, deletedCount: result.deletedCount };
	}

	/** Delete one entity model
	 * @output object result deleting
	 * @param model current model working
	 * @param options
	 * @param filterObj object filter */
	async $deleteOne(model, filterObj, options = {}) {
		const result = await model.deleteOne(filterObj, options);
		/** Wrapper data return from version 6 to old version which services using */
		return { n: result.acknowledged ? 1 : 0, ok: result.acknowledged ? 1 : 0, deletedCount: result.deletedCount };
	}

	async $distinct(model, field, filterObj = {}) {
		return model.distinct(field, filterObj);
	}
}

module.exports = MongoFuncHelper;
