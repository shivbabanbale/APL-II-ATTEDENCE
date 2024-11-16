const Footer=()=>{

    let year=new Date().getFullYear();
    console.log(year)
    return(
        <>
            <p style={{
                marginTop:"26%",
                alignItems:"center",
                textAlign:"center"
            }}> copyrights by mr.Shivba Banbale in {year}</p>
        </>
    )

}
export default Footer;