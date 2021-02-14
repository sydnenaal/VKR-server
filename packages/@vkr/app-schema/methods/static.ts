
export type findByIdMethod<T> = (_id: string) => Promise<T>
export type findListMethod<T> = (query?: Object) => Promise<Array<T>>

export const findById = async function(_id: string): Promise<any> {
    return await this.findOne({ _id })
}

export const findList = async function(query: Object = {}): Promise<any> {
    return await this.find(query)
}