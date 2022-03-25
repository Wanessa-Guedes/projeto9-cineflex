
export default function FooterPageThree(props) {
    return (
        <>
            <footer>
                <img src={props.url} alt="" />
                <div>
                    <h1>{props.title}</h1>
                    <h1>{props.day} - {props.hour}</h1>
                </div>
            </footer>
        </>
    )
}