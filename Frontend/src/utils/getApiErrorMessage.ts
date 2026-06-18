import { isAxiosError } from "axios";

export function getApiErrorMessage(error: unknown): string {

    if (isAxiosError(error)) {
        return error.response?.data?.message ?? "something went wrong"
    }

    if(error instanceof Error) return error.message;

    return "unknown error occured"

}  