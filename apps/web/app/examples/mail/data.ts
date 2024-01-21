import { subDays } from 'date-fns'
import { InboxMail } from './types'

export const MAILS: InboxMail[] = [
  {
    name: 'Alex Low',
    title: 'Meeting Tomorrow',
    content: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.

    Please come prepared with any questions or insights you may have. Looking forward to our meeting!
    
    Best regards, Alex`,
    date: subDays(new Date(), 10),
    labels: [
      {
        label: 'work',
      },
      {
        label: 'meeting',
      },
      {
        label: 'important',
      },
    ],
  },
  {
    name: 'Abby Goodman',
    title: 'Product Launch Update',
    content: `The product launch is on track. I'll provide an update during our call. We've made substantial progress in the development and marketing of our new product.

    I'm excited to share the latest updates with you during our upcoming call. It's crucial that we coordinate our efforts to ensure a successful launch. Please come prepared with any questions or insights you may have.
    
    Let's make this product launch a resounding success!
    
    Best regards, Abby`,
    date: subDays(new Date(), 20),
    labels: [
      {
        label: 'meeting',
      },
      {
        label: 'important',
      },
    ],
  },
  {
    name: 'Josephine Vu',
    title: 'Product Update',
    content: `Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.

    I have a few minor suggestions that I'll include in the attached document.
    
    Let's discuss these during our next meeting. Keep up the excellent work!
    
    Best regards, Josephine`,
    date: subDays(new Date(), 25),
    labels: [
      {
        label: 'personal',
      },
    ],
  },
  {
    name: 'Rohan Zhuang',
    title: 'New Project Idea',
    content: `I have an exciting new project idea to discuss with you. It involves expanding our services to target a niche market that has shown considerable growth in recent months.

    I've prepared a detailed proposal outlining the potential benefits and the strategy for execution.
    
    This project has the potential to significantly impact our business positively. Let's set up a meeting to dive into the details and determine if it aligns with our current goals.
    
    Best regards, Rohan`,
    date: subDays(new Date(), 33),
    labels: [
      {
        label: 'project',
      },
    ],
  },
  {
    name: 'Derek Shi',
    title: 'Conference Registration',
    content: `I've completed the registration for the conference next month. The event promises to be a great networking opportunity, and I'm looking forward to attending the various sessions and connecting with industry experts.

    I've also attached the conference schedule for your reference.
    
    If there are any specific topics or sessions you'd like me to explore, please let me know. It's an exciting event, and I'll make the most of it.
    
    Best regards, Derek`,
    date: subDays(new Date(), 42),
    labels: [
      {
        label: 'work',
      },
      {
        label: 'conference',
      },
    ],
  },
  {
    name: 'Arian Lee',
    title: 'Feedback Request',
    content: `I'd like your feedback on the latest project deliverables. We've made significant progress, and I value your input to ensure we're on the right track.

    I've attached the deliverables for your review, and I'm particularly interested in any areas where you think we can further enhance the quality or efficiency.
    
    Your feedback is invaluable, and I appreciate your time and expertise. Let's work together to make this project a success.
    
    Regards, Arian`,
    date: subDays(new Date(), 43),
    labels: [
      {
        label: 'feedback',
      },
    ],
  },
  {
    name: 'Thone Loong',
    title: 'Meeting Agenda',
    content: `Here's the agenda for our meeting next week. I've included all the topics we need to cover, as well as time allocations for each.

    If you have any additional items to discuss or any specific points to address, please let me know, and we can integrate them into the agenda.
    
    It's essential that our meeting is productive and addresses all relevant matters.
    
    Looking forward to our meeting! Thone`,
    date: subDays(new Date(), 50),
    labels: [
      {
        label: 'meeting',
      },
    ],
  },
  {
    name: 'Rohan Benderson',
    title: 'Team Building Event',
    content: `Let's plan a team-building event for our department. Team cohesion and morale are vital to our success, and I believe a well-organized team-building event can be incredibly beneficial. I've done some research and have a few ideas for fun and engaging activities.

    Please let me know your thoughts and availability. We want this event to be both enjoyable and productive.
    
    Together, we'll strengthen our team and boost our performance.
    
    Regards, Rohan`,
    date: subDays(new Date(), 60),
    labels: [
      {
        label: 'team',
      },
    ],
  },
]
