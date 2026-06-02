import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from '@/components/ui/accordion'
import { faqs } from '@/data/FaqData'

const FAQ = () => {

  return (
    <section className='w-full max-w-7xl mx-auto flex flex-col gap-8 px-4 sm:px-6 md:px-10 lg:px-12 py-8 md:py-12'>
        <h3>Frequently Asked Questions</h3>
      
            <Accordion type='single' collapsible className='w-full space-y-3 sm:space-y-4 md:space-y-5'>
                {
                    faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
    </section>
  )
}

export default FAQ
