export const apiKeys = [
    "kGR9Jk85koM9BZq9wIRKf3h2GeP559uApg5S6vFPU0Xkggij",
    "036U5Me7c6mfOn_EoEPvvSZupTa61fN-I4bOuPnJqqUcAInQ",
    "xjsVMHmartoj1zzR_wkWeCz7dxeRwAtxG6wPfVVWJl2-FTeW",
    "WGqj59R_XoCwylZuvBc-uyOP_ijfE_jPLfD3EXK1fLaQPXNA",
    "hurORI0U0x-hWbk_H1w5h2KzwPRtj6xnvhZOEflIsia882D9",
];

export const getApiKey = () => {
    return apiKeys[Math.floor(Math.random() * Math.floor(apiKeys.length))];
}