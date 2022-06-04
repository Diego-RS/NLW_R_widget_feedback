import { CloseButton } from "../CloseButton"
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypesStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: { 
            source: bugImageUrl,
            alt: 'Icone de um inseto',
        },
    },
    IDEA: {
        title:'Ideia',
        image: { 
            source: ideaImageUrl,
            alt: 'Icone de uma lampada'
        },
    },

    OTHER: {
        title:'Outro',
        image: { 
            source: thoughtImageUrl,
            alt: 'Icone de balão de pensamento'
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSend, setFeedbackSend] = useState(false);
    
    function handleRestartFeedback() {
        setFeedbackType(null);
        setFeedbackSend(false);
    }
    
    return (
<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
    
{ feedbackSend ? (
    <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
) : (
    <>
    {
    !feedbackType ? (
<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
    ) : (

        <FeedbackContentStep 
        feedbackType={feedbackType} 
        onFeedbackRestartRequested={handleRestartFeedback}
        onFeedbackSend={() => setFeedbackSend(true)}
        />
)}
    </>
)}


    <footer>
       <a className="underline-offset-2" href="#"> by Diego Rodrigues 🤖 </a>
        </footer>
        </div>
    );
}