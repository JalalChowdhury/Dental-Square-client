import React from 'react';
import faqImg from '../../assets/Faq-img.jpg'
const FaqAbout = () => {
    return (
        <section className="py-5 container" id="about">

            <div className="top-text">
                <h1>Why we are the best? FAQ’s</h1>
                <h6>The journey of a thousand (S)miles begins with one step!</h6>
            </div>
            {/*  added row part for Question and answer--> */}
            <article className="row">


                <div className="col-md-6 my-5">

                    {/*  boostrap accordian using for Questions  */}
                    <div className="accordion" id="accordionExample">
                        {/*  Question and Answer - 1  --> */}
                        <div className="accordion-item border border-info">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button bg-white accordian-ques-design" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                                    What type of dental care is best for you?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Dental or oral health is concerned with your teeth, gums and mouth. The goal is to prevent complications such as tooth decay (cavities)
                                    and gum disease and to maintain the overall health of your mouth.
                                    Tooth decay and gum disease are caused by plaque, a sticky combination of bacteria and food. Plaque begins
                                    to build up on teeth within a few minutes after eating. If teeth are not cleaned well each day, plaque will lead
                                    to tooth decay or gum disease. If you do not remove plaque, it turns into a hard deposit called tartar that becomes
                                    trapped at the base of the tooth.
                                    Even if you have let dental problems develop over time, it is never too late to see a dental health professional for corrective procedures.
                                     Thanks to modern practices, much of the pain some people fear is gone from dental health procedures.​​
                                </div>
                            </div>
                        </div>

                        {/*  Question and Answer - 2  --> */}
                        <div className="accordion-item my-3 border border-info">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed bg-white accordian-ques-design" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    How to protect the tooth?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    If you brush more than twice a day, for longer than four minutes total, you could wear down the enamel layer that protects your teeth.
                                    “Sip All Day, Get Decay” is a campaign from the Minnesota Dental Association to warn people of the dangers of soft drinks.
                                    It’s not just sugar soda, but diet soda, too, that harms teeth. The acid in soda attacks teeth.“Sip All Day, Get Decay” is a campaign from
                                    the Minnesota Dental Association to warn people of the dangers of soft drinks.
                                    It’s not just sugar soda, but diet soda, too, that harms teeth. The acid in soda attacks teeth.
                                </div>
                            </div>
                        </div>

                        {/*  Question and Answer - 3  --> */}
                        <div className="accordion-item my-3 border border-info">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed bg-white accordian-ques-design" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                    aria-controls="collapseThree">
                                    How often should one floss the teeth?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Your toothbrush can’t reach between your teeth to remove plaque (a sticky film that contains bacteria). Flossing gets between your teeth to clean
                                    away the plaque.By flossing and brushing your teeth, you’re removing plaque and the bacteria in it that feeds on sugar and particles of food that remain in your mouth after eating.
                                    When the bacteria feed, they release an acid that can eat away at your enamel (the hard outer shell of your teeth) and cause cavities.
                                </div>
                            </div>
                        </div>

                        {/*  Question and Answer - 4  --> */}
                        <div className="accordion-item my-3 border border-info">
                            <h2 className="accordion-header accordian-ques-design" id="headingThree">
                                <button className="accordion-button bg-white collapsed " type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Use mouthwash regularly for better oral hygiene?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Mouthwash, also called oral rinse, is a liquid product used to rinse your teeth, gums, and mouth. It usually contains an antiseptic to kill harmful
                                    bacteria that can live between your teeth and on your tongue.
                                    Some people use mouthwash to fight against bad breath, while others use it to try to prevent tooth decay.
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-md-6 py-4">
                    <img src={faqImg} className="img-fluid" alt="" />
                </div>

            </article>
        </section>
    );
};

export default FaqAbout;