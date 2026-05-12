"use client";

import { useState } from "react";

import {
  FileText,
  Upload,
  CreditCard,
  GraduationCap,
  Lock,
  Check,
} from "lucide-react";

export default function AdmissionProcess() {

  const [activeStep, setActiveStep] =
    useState(0);

  const steps = [
    {
      icon: <FileText size={30} />,
      title: "Apply Online",
      desc:
        "Complete your application through our secure online portal.",
    },

    {
      icon: <Upload size={30} />,
      title: "Upload Documents",
      desc:
        "Submit documents easily through our LMS-enabled system.",
    },

    {
      icon: <CreditCard size={30} />,
      title: "Pay Fees",
      desc:
        "Securely pay through cards, UPI, net banking or EMI options.",
    },

    {
      icon: <GraduationCap size={30} />,
      title: "Start Learning",
      desc:
        "Access the digital platform and begin your academic journey.",
    },
  ];

  return (

    <section className="admissionProcessSection">

      {/* HEADING */}

      <div className="admissionProcessHeading">

        <span className="admissionProcessSubtitle">
          INTERACTIVE ADMISSION JOURNEY
        </span>

        <h2 className="admissionProcessTitle">
          Admission Process
          <span> in 4 Steps</span>
        </h2>

        <p className="admissionProcessDesc">
          Progress through each admission stage
          seamlessly with our guided onboarding
          experience.
        </p>

      </div>

      {/* PROCESS */}

      <div className="admissionProcessWrapper">

        {steps.map((step, index) => {

          const isUnlocked =
            index <= activeStep;

          const isCompleted =
            index < activeStep;

          const isActive =
            index === activeStep;

          return (

            <div
              key={index}
              className={`
                admissionProcessCard
                ${isUnlocked ? "unlocked" : "locked"}
                ${isActive ? "active" : ""}
              `}
              onClick={() => {

                if (index <= activeStep) {

                  if (
                    activeStep <
                    steps.length - 1
                  ) {
                    setActiveStep(
                      activeStep + 1
                    );
                  }
                }
              }}
            >

              {/* NUMBER */}

              <div className="admissionStepNumber">
                0{index + 1}
              </div>

              {/* ICON */}

              <div className="admissionProcessIcon">

                {isCompleted ? (
                  <Check size={28} />
                ) : isUnlocked ? (
                  step.icon
                ) : (
                  <Lock size={26} />
                )}

              </div>

              {/* CONTENT */}

              <h3>{step.title}</h3>

              <p>{step.desc}</p>

              {/* CONNECTOR */}

              {index !== steps.length - 1 && (

                <div
                  className={`
                    admissionConnector
                    ${
                      index < activeStep
                        ? "connectorActive"
                        : ""
                    }
                  `}
                />

              )}

            </div>
          );
        })}

      </div>

    </section>
  );
}