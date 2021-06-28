export function Account({ url }) {
    return (
        <>
            <div>
                <img
                    loading="lazy"
                    src={url}
                    alt="Image Profile"
                    className="h-10 w-10 rounded-full object-cover"
                />
            </div>
        </>
    )
}
export function Icons({ url }) {
    return (
        <>
            <div>
                <img
                    loading="lazy"
                    src={url}
                    alt="Image Profile"
                    className="h-10 w-10 object-cover"
                />
            </div>
        </>
    )
}