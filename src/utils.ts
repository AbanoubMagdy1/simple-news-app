export function extractErrorMessage(err: any){
    return err.response?.data?.message || err.message || "Something went wrong";
}

export async function handleAsync(func: any, ...params: any[]): Promise<[any, null] | [null, any]>{
    try{
        const data = await func(...params);
        return [data, null]
    } catch(err){
        return [null, extractErrorMessage(err)]
    }
}