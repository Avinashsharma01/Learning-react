import Cards from "./card"

function Feature(){
    let name=['Avinash Sharma','Soumya Mishra','Abhishek Rathore', 'Aaradhaya Rajput','Rahul Sharma','Brijesh Sharma','Arjun Singh', 'Rimjhim Gupta', 'Ajay Singh']

    let description = [
        "Avinash Sharma is a dedicated software engineer who loves coding and enjoys solving complex technical challenges.",
        "Soumya Mishra is an excellent data analyst with a keen eye for detail and data visualization.",
        "Abhishek Rathore is a talented graphic designer known for creating visually stunning and impactful designs and logos.",
        "Aaradhaya Rajput is a skilled content writer with a passion for storytelling and creative writing in various genres.",
        "Rahul Sharma is an experienced project manager who excels in team coordination and timely delivery of projects.",
        "Brijesh Sharma is a proficient web developer specializing in creating responsive and user-friendly websites using modern technologies.",
        "Arjun Singh is a highly motivated digital marketer with expertise in SEO, social media, and online advertising.",
        "Rimjhim Gupta is a seasoned human resources professional known for her excellent recruitment and employee engagement strategies.",
        "Ajay Singh is a knowledgeable IT consultant with vast experience in providing effective technological solutions to businesses."
      ];
      


    return(
        <>
            <div className="feature w-full h-auto bg-sky-700 p-8 md:px-32">
                <div className="heading flex justify-center">
                    <h1 className="featureshead bg-emerald-700 text-white py-2 px-5 w-full text-center mb-5"> This is the features heading</h1>
                </div>
            <div className="cards flex justify-around flex-wrap gap-10">
            <Cards Myname={name[0]} Mydescription={description[0]}/>
            <Cards Myname={name[1]} Mydescription={description[1]}/>
            <Cards Myname={name[2]} Mydescription={description[2]}/>
            <Cards Myname={name[3]} Mydescription={description[3]}/>
            <Cards Myname={name[4]} Mydescription={description[4]}/>
            <Cards Myname={name[5]} Mydescription={description[5]}/>
            <Cards Myname={name[6]} Mydescription={description[6]}/>
            <Cards Myname={name[7]} Mydescription={description[7]}/>
            <Cards Myname={name[8]} Mydescription={description[8]}/>
            </div>
            </div>
        </>
    )
}

export default Feature