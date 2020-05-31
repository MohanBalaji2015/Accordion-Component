import React from 'react'

function FAQ ({faq, index, toggleFAQ}) {
	return (
		<div
			className={`faq ${faq.open ? 'open' : ''}`}
			key={index}
			onClick={() => toggleFAQ(index)}
		>
			<div className="faq-question">
				<span className="faq-number">Q{index+1}</span>
				<span className="faq-text">{faq.question}</span>				
			</div>
			<div className="faq-answer">
				{faq.answer}
			</div>
		</div>
	)
}

export default FAQ