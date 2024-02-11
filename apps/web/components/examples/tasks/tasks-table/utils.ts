import { Task, TaskPriority, TaskStatus, TaskType } from "../../../../types/tasks";

// Array of sample task titles
const randomTitles = [
  "Update documentation for new API endpoints",
  "Refactor CSS to use a modular approach",
  "Implement password strength meter for user registration",
  "Fix cross-browser compatibility issues in the dashboard",
  "Integrate chat support widget into the application",
  "Optimize SQL queries for faster database performance",
  "Create user onboarding tutorial for new sign-ups",
  "Implement email verification process for user accounts",
  "Add error handling to form submissions",
  "Design and implement a dark mode theme for the app",
  "Update third-party libraries to the latest versions",
  "Create automated tests for critical user flows",
  "Improve accessibility for users with disabilities",
  "Optimize image compression settings for faster loading",
  "Implement two-factor authentication for user accounts",
  "Update privacy policy and terms of service pages",
  "Create admin dashboard for managing user accounts",
  "Fix memory leaks in background processing tasks",
  "Implement pagination for long lists of data",
  "Optimize database indexes for improved query performance",
  "Refactor backend code to use dependency injection",
  "Implement rate limiting to prevent API abuse",
  "Add support for file uploads in the application",
  "Update UI design to follow material design guidelines",
  "Create interactive data visualizations for analytics",
  "Implement lazy loading for images and videos",
  "Add keyboard shortcuts for common actions",
  "Improve search functionality with fuzzy matching",
  "Optimize database queries using query caching",
  "Implement password reset functionality for users",
  "Create user profile page with editable fields",
  "Update payment gateway integration for compliance",
  "Add localization support for multiple languages",
  "Implement user permissions system for role-based access",
  "Optimize server-side rendering for SEO performance",
  "Create automated deployment pipeline with CI/CD",
  "Implement session management and expiry",
  "Update frontend frameworks to the latest versions",
  "Add support for push notifications on mobile devices",
  "Implement data validation for user inputs",
  "Update branding and logo across the application",
  "Implement webhooks for real-time notifications",
  "Add social sharing buttons to content pages",
  "Update user interface with responsive design patterns",
  "Create interactive tutorials for new features",
  "Implement content moderation system for user-generated content",
  "Update error logging and monitoring system",
  "Add support for custom user avatars",
  "Implement user feedback mechanism for feature requests",
  "Update SSL certificates for secure connections",
  "Optimize database schema for scalability",
  "Implement scheduled tasks for automated maintenance",
  "Create user dashboard with personalized recommendations",
  "Add progress indicators for long-running tasks",
  "Update cookie management for GDPR compliance",
  "Implement user blocking and reporting functionality",
  "Integrate single sign-on (SSO) authentication",
  "Optimize client-side performance with code splitting",
  "Update API documentation with examples and usage",
  "Implement analytics tracking for user behavior",
  "Add user notifications for important events",
  "Create user surveys for feedback collection",
  "Implement user session timeout handling",
  "Update error messages for clarity and user-friendliness",
  "Add support for rich text editing in user comments",
  "Implement data encryption for sensitive information",
  "Update caching strategy for improved performance",
  "Create automated backups for data recovery",
  "Implement content filtering for inappropriate content",
  "Add support for custom user themes",
  "Update email templates for consistency and branding",
  "Implement geo-location tracking for user preferences",
  "Optimize database connections for connection pooling",
  "Create user forums for community discussions",
  "Implement API rate limiting for third-party integrations",
  "Add support for user bookmarks and favorites",
  "Update UI animations for smoother transitions",
  "Implement user activity logging for auditing",
  "Create interactive walkthroughs for new users",
  "Implement data anonymization for privacy compliance",
  "Add support for user-defined data fields",
  "Update notification preferences for user settings",
  "Implement data export functionality for users",
  "Add support for user authentication via social media",
  "Update documentation for code style and conventions",
  "Implement browser caching for static assets",
  "Add support for user tagging in content",
  "Implement user search functionality with filters",
  "Update user dashboard with performance metrics",
  "Add support for user-generated content moderation",
  "Implement user feedback rating system",
  "Create user profiles with customizable settings",
  "Update data validation rules for user inputs"
];

// Function to generate a random string for task IDs
function generateRandomId(): string {
  return `TASK-${Math.floor(1000 + Math.random() * 9000)}`;
}

// Function to generate a random task
export const generateRandomTask = (): Task => {
  const id = generateRandomId();
  const titleIndex = Math.floor(Math.random() * randomTitles.length);
  const title = randomTitles[titleIndex]!;
  const type = Object.values(TaskType)[Math.floor(Math.random() * Object.keys(TaskType).length)]!;
  const status = Object.values(TaskStatus)[Math.floor(Math.random() * Object.keys(TaskStatus).length)]!;
  const priority = Object.values(TaskPriority)[Math.floor(Math.random() * Object.keys(TaskPriority).length)]!;

  return {
    id,
    title,
    type,
    status,
    priority
  };
}
