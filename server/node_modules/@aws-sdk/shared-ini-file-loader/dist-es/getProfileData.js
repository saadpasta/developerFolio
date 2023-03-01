const profileKeyRegex = /^profile\s(["'])?([^\1]+)\1$/;
export const getProfileData = (data) => Object.entries(data)
    .filter(([key]) => profileKeyRegex.test(key))
    .reduce((acc, [key, value]) => ({ ...acc, [profileKeyRegex.exec(key)[2]]: value }), {
    ...(data.default && { default: data.default }),
});
