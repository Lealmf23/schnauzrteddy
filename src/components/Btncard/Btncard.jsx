const Btncard = (props) => {
    const { linkUrl, colorRed, btnText, btnsimbolo } = props;
    return (
        <a
            href={linkUrl}
            className={`${colorRed} text-white m-2 px-3 pr-2 rounded-2xl hover:bg-gray-800 transition-colors duration-300    `}>
            {btnText} <i className={`bi ${btnsimbolo}`}></i>
        </a>
    )
}
 
export default Btncard;