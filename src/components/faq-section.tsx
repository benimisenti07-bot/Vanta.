'use client'

import { FadeIn } from './ui/fade-in'
import { GlassCard } from './ui/glass-card'
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

const faqs = [
  {
    question: "Will this guarantee the IRS reduces my debt?",
    answer: "No, and be wary of anyone who makes such guarantees. This playbook explains the legitimate IRS processes and requirements. Results depend on your specific financial situation and the IRS's evaluation of your case. What we guarantee is comprehensive, accurate information based on official IRS procedures."
  },
  {
    question: "Is this legal and IRS-approved?",
    answer: "Yes, 100%. Everything in this playbook is based on official IRS publications, forms, and established procedures. These are the same processes tax resolution firms use. There are no 'secrets' or 'loopholes' - just legitimate tax relief options explained clearly."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day quality refund policy. If you're not satisfied with the content quality or feel the information wasn't as described, contact us within 30 days for a full refund. We stand behind our work."
  },
  {
    question: "How is this different from free IRS information?",
    answer: "While the IRS provides free forms and basic information, our playbook translates complex tax code into step-by-step processes. You get real-world examples, phone scripts, letter templates, and strategies that would typically cost thousands from a tax firm."
  },
  {
    question: "What if I have a complex tax situation?",
    answer: "The Pro package includes advanced strategies and templates for complex cases. However, if your situation involves criminal tax matters, multiple years of non-filing, or business tax issues exceeding $50K, you should consider professional representation."
  },
  {
    question: "How quickly will I receive the materials?",
    answer: "Immediately after purchase, you'll receive download links via email. All materials are delivered as PDF files that work on any device. No physical shipping - instant access means you can start today."
  },
  {
    question: "Can I use this if I live outside the US?",
    answer: "This playbook is specifically designed for US tax situations and IRS procedures. If you're a US citizen living abroad with IRS issues, it may be helpful, but international tax situations often require specialized professional guidance."
  },
  {
    question: "Is there ongoing support included?",
    answer: "Both packages include email support. The Starter package includes 30 days of support, while the Pro package includes 60 days plus priority phone support. We're here to help you understand and implement the strategies."
  }
]

export function FAQSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 heading-gradient">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get answers to common questions about the DIY IRS Relief Playbook. 
              Still have questions? We're here to help.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <FadeIn direction="up" delay={0.3}>
            <GlassCard className="p-0 overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-b border-gray-800 last:border-b-0"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white hover:bg-opacity-5 transition-colors">
                      <span className="font-semibold text-white pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCard>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.6}>
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Still have questions? We're here to help.
            </p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <a 
                href="mailto:support@diyirsrelief.com" 
                className="flex items-center gap-2 text-neon-teal hover:text-neon-purple transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                support@diyirsrelief.com
              </a>
              <div className="text-gray-600">•</div>
              <div className="text-gray-400 text-sm">
                Response within 24 hours
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}