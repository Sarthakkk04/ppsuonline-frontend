"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {

  const faqs = [
    {
      question:
        "Is PPSU Online approved by UGC-DEB?",
      answer:
        "Yes. PPSU Online programs are offered in compliance with UGC-DEB regulations and are designed to deliver recognised, flexible and industry-relevant online education.",
    },

    {
      question:
        "Can I study while working full-time?",
      answer:
        "Absolutely. PPSU Online programs are specially designed for working professionals with flexible schedules, recorded sessions and self-paced learning support.",
    },

    {
      question:
        "Are online degrees from PPSU valid for jobs and higher education?",
      answer:
        "Yes. Online degrees offered by PPSU are recognised and can be used for employment opportunities, competitive examinations and higher education pathways as per prevailing regulations.",
    },

    {
      question:
        "What learning support will I receive?",
      answer:
        "Students receive access to expert faculty, recorded lectures, live interactive sessions, LMS support, academic mentoring and dedicated student assistance.",
    },

    {
      question:
        "Do online programs include examinations and assessments?",
      answer:
        "Yes. Programs include assignments, quizzes, projects and semester-end assessments conducted through structured online academic processes.",
    },

    {
      question:
        "Are EMI or instalment payment options available?",
      answer:
        "Yes. PPSU Online provides flexible semester-wise payment options along with financing and EMI support through partner platforms.",
    },
  ];

  const [activeIndex, setActiveIndex] =
    useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(
      activeIndex === index ? null : index
    );
  };

  return (

    <section className="faqSection">

      {/* HEADING */}

      <div className="faqHeading">

        <h2 className="faqTitle">
          Frequently Asked
          <span> Questions</span>
        </h2>

        <p className="faqDesc">
          Find answers to the most common questions
          about admissions, learning experience,
          flexibility, degree validity and student support.
        </p>

      </div>

      {/* FAQ LIST */}

      <div className="faqContainer">

        {faqs.map((faq, index) => {

          const isActive =
            activeIndex === index;

          return (

            <div
              key={index}
              className={`faqItem ${
                isActive ? "active" : ""
              }`}
            >

              {/* QUESTION */}

              <button
                className="faqQuestion"
                onClick={() =>
                  toggleFAQ(index)
                }
              >

                <div className="faqQuestionText">
                  {faq.question}
                </div>

                <div className="faqIcon">

                  {isActive ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}

                </div>

              </button>

              {/* ANSWER */}

              <div
                className={`faqAnswerWrapper ${
                  isActive ? "open" : ""
                }`}
              >

                <div className="faqAnswer">
                  {faq.answer}
                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}