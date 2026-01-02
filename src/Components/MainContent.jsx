import React from 'react'
import firstImage from "../Assets/Images/Azhar01.jpg";
import secondImage from "../Assets/Images/AzharWithAI01.png";
import thirdImage from "../Assets/Images/AzharWithAI02.png";
import fourImage from "../Assets/Images/Azhar02.jpeg";
import fiveImage from "../Assets/Images/AzharWithAI03.png";
import congratulation from "../Assets/Images/Congratulation.png";

function MainContent() {

  return (
    <div className="mainContent">

    {/* with one Image */}
    {/* <img src={congratulation} alt="FirstImage" width="1500px" height={450} style={{ margin: "5px",padding:"5px" }} /> */}

    {/* With Three Images */}
      {/* <img src={secondImage} alt="FirstImage" width="500px" height={450} style={{ margin: "5px" }} />
      <img src={thirdImage} alt="SecondImage" width="500px" height={450} />
      <img src={fiveImage} alt="ThirdImage" width="500px" height={450} style={{ margin: "5px" }} /> */}

      {/* With five Images */}
      <img src={firstImage} alt="FirstImage" width="290px" height={450} style={{ margin: "5px" }} />
      <img src={secondImage} alt="SecondImage" width="300px" height={450} />
      <img src={fiveImage} alt="ThirdImage" width="300px" height={430} style={{ margin: "5px" }} /> 
      <img src={thirdImage} alt="fourthImage" width="300px" height={450} />
      <img src={fourImage} alt="fifthImage" width="300px" height={450} style={{ margin: "5px" }} />
    </div>
  )

}

export default MainContent