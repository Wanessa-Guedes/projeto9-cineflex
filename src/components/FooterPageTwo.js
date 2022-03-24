

export default function FooterPageTwo(props){
    return(
        <>
            <footer>
                <img src={props.url} alt=""/>
                <h1>{props.title}</h1>
            </footer>
        </>
    )
}