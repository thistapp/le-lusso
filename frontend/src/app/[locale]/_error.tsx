// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Error({ statusCode }: any) {
    return (
        <div>
            {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'}
        </div>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Error.getInitialProps = ({ res, err }: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error