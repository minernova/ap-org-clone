import React from "react";
import SocialButtons from "./SocialButtons";
import SectionHeading from "./SectionHeading";

export default function HeroCard() {
  return (
    <div className="mt-8">
      <SectionHeading label={"संतवाणी"}/>

      <div class="flex flex-col md:items-start items-center md:flex-row  ">
        <img
          class="object-cover w-full min-h-full lg:w-2/5 md:w-3/5 flex-shrink-0 rounded  "
          src="https://cimg.acharyaprashant.org/images/img-4337ee73-d8a3-4c8b-951b-d09a5a6468d3/10/image.jpg"
          alt=""
        ></img>
        <div class="flex flex-col justify-start self-stretch   px-4 ">
          <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-700">
            संतों की सीख पर आधारित श्रृंखला
          </h5>
          <p class="mb-3 font-light text-sm text-gray-700 tracking-wide">
            जब-जब समाज में धर्म के प्रति अनादर बढ़ा है और आम-आदमी की चेतना को
            पाखंड ने घेरा है, तब-तब संतों ने अपने वचनों से हमारे मन को शीतलता
            प्रदान की है और सामाजिक चेतना को शुद्ध किया है। इस श्रृंखला में
            आचार्य जी ने संत कबीरदास, तुलसीदास, पलटूदास, दादू दयाल, सहजोबाई,
            मलूकदास, दरियादास, रविदास आदि संतों की वाणी पर चर्चा की है। जानिए
            उनके वचनों की जीवन में सार्थकता को आचार्य प्रशांत के साथ इस आसान
            वीडियो कोर्स में।
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <h2 class="flex flex-col justify-start  mt-4">Share this series:</h2>
        <SocialButtons />
      </div>
    </div>
  );
}
