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

export function padTwo(num: number): string{
    return num.toString().padStart(2, '0')
}


export function getYesterdayDate(): string{
    const date = new Date()
    date.setDate(date.getDate() - 1)
    const year = date.getFullYear()
    const month = padTwo(date.getMonth() + 1)
    const day = padTwo(date.getDate())
    return `${year}-${month}-${day}`
}