export type createItemMethod = () => Promise<void>

export const createItem: createItemMethod = async function() {
    await this.save()
}
