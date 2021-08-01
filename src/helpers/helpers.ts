export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

export const camelToReadable = (str: string): string => {
    const result = str.replace(/([A-Z])/g, " $1")
    return result.charAt(0).toUpperCase() + result.slice(1)
}
