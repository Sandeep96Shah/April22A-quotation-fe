const ROOT_URL = "http://localhost:700";

export const getApis = {
    createUser: () => `${ROOT_URL}/sign-up`,
    signIn: () => `${ROOT_URL}/sign-in`,
    userDetails: (userId) => `${ROOT_URL}/user-details`,
    createQuotation: () => `${ROOT_URL}/create-quotation`,
    allQuotations: () => `${ROOT_URL}/quotations`,
}