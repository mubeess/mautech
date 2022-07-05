import { useEffect } from 'react';
import mau_cover from '../assets/mau_cover.jpg';
import MyVideo from '../components/MyVideo';
const AboutMau = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
          })
    },[])
    return ( 
        <div style={{marginTop:110}}>
        <div className="AboutMau-Container">
            {/* <div>
                <img className='Mau-Display' src={mau_cover} alt="" srcset="" />
            </div> */}
        <MyVideo title='About MAU' content=''/>
            <div className='About-History-Container' styles={{ backgroundImage:`url(${mau_cover})` }}>
                <div className='H2-Container'>
                    <h2>BRIEF HISTORY OF MODIBBO ADAMA UNIVERSITY YOLA</h2>
                </div>
                <div>
                    <p>
                    The University is located at Sangere, a Village in Girei Local Government Area of Adamawa State, and some 10km from Jimeta.

                    In 1980 the Federal Government in response to the nationally acclaimed need for skilled, innovative and technologically oriented high-level manpower required to develop and nurture a technology based economy and society established seven new Universities of Technology.  Federal University of Technology, Yola, along with those of Abeokuta, Akure, Bauchi, Makurdi, Minna and Owerri, came into being in 1981.  This University admitted its first batch of students (214 numbers) in the 1982/83 academic session.  The Current population of regular undergraduates is 14600.

                    The University had barely taken off when the succeeding Military Government abolished four of the seven new Universities of Technology and merged them with older Universities in October, 1984.  Federal University of Technology, Yola was merged with University of Maiduguri and became known as Modibbo Adama College of the University of Maiduguri.  Four years later, on 1st January 1988 the University was granted its former name and full autonomy as the Federal University of Technology, Yola.  A substantive Vice-Chancellor was therefore appointed to run the affairs of the University.

                    The University from inception has run the School system of Administration with two Schools, the School of Science and Technology Education and the School of Management Sciences.  Presently, the University has six Schools, namely, the School of Agriculture and Agricultural Technology, Engineering and Engineering Technology, Environmental Sciences, Management and Information Technology, Pure and Applied Sciences and Technology and Science Education.The then President, Dr. Goodluck Ebele Jonathan, GCFR, approved the change of name of the University from: Federal University of Technology, Yola (FUT,Yola) To Modibbo Adama University of Technology, Yola (MAUTECH,Yola), supposedly named after Modibbo Adama Ibn Hassan(1809-1847), a great scholar, an erudite educationist, an outstanding leader and the founder of the Fombina Kingdom (The Present Adamawa Emirate). As the first ruler and founder of the Emirate, Modibbo Adama Ibn Hassan was one of the disciples and flag bearers of Sheikh Usman Ibn Fodio of the Sokoto Caliphate. The new name took effect from 1st October, 2011. Subsequently,  President Muhammadu Buhari assented to the Modibbo Adama University Yola establishment bill on the 6th of January 2021.

                    </p>
                </div>
            </div>
            <div className="Objectives-Container">
                <div className='Objectives-Container-Card'>
                    <div>
                        <h3>Vision</h3>
                    </div>
                    <div>
                        <p>To be a centre of academic excellence, innovation and community development</p>
                    </div>
                </div>
                <div className='Objectives-Container-Card2'>
                    <div>
                        <h3>Mission</h3>
                    </div>
                    <div>
                        <p>To set the path for knowledge by providing educational and entrepreneurial services for
                        sustainable growth and development</p>
                    </div>
                </div>
                <div className='Objectives-Container-Card3'>
                    <div>
                        <h3>Philosophy</h3>
                    </div>
                    <div>
                        <p>The philosophy of Modibbo Adama University, Yola is to recognise the worth and dignity of academic pursuit by respecting all cultural affiliations and diversity of staff and students, by helping students reach their potentials within standard timeframes and by a committed to community service to address gaps that hinder development and sustainability.</p>
                    </div>
                </div>
                <div className='Objectives-Container-Card-Core-Values'>
                    <div>
                        <h3>Core Values</h3>
                    </div>
                    <div>
                        <dt>
                            <dl>Integrity: maintaining the highest ethical standards in teaching, research, public engagement and service.</dl>
                            <dl> Innovation: encouraging, considering and supporting development of ideas by fostering individual ingenuity and creativity.</dl>
                            <dl>Accountability: ensuring that the values of transparency and stewardship are embedded and practiced by every member of the community.</dl>
                            <dl>Rationality: seeking always the best solution to issues, ensuring the satisfaction of the wider proportion of the patriotic interest and efficient resource mobilization. </dl>
                            <dl>Excellence: pursuit of outstanding performance, abhorring mediocrity and promoting excellence in research, teaching and service through a merit-based recruitment and nurturing of staff and students.</dl>
                            <dl>Sustainability: acting in a manner that is environmentally, economically and socially sustainable academic and research activities.</dl>
                            <dl>Collaboration: working toward common goals with other institutions, organizations and communities while valuing teamwork, participation and diversity of ideas and perspectives.</dl>
                        </dt>
                    </div>
                </div>
               
                <div className='Video_container'>
                <video controls>
                        <source src='https://res.cloudinary.com/nutscoders/video/upload/v1646231311/mau-vid_gmyivp.mp4' type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default AboutMau;