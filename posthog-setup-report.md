<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the muolingo language learning app. PostHog is initialized via `lib/posthog.ts` using `expo-constants` to read credentials from `app.config.js` extras (sourced from `.env`). The `PostHogProvider` wraps the app in `app/_layout.tsx` with autocapture for touch events and manual screen tracking tied to Expo Router's pathname. User identification is called on sign-up and sign-in with Clerk email as the distinct ID.

| Event | Description | File |
|---|---|---|
| `onboarding_get_started` | User taps the Get Started button on the onboarding screen | `app/onboarding.tsx` |
| `user_signed_up` | User successfully completes sign-up and email verification | `app/(auth)/sign-up.tsx` |
| `user_signed_in` | User successfully signs in with email/password (including MFA) | `app/(auth)/sign-in.tsx` |
| `language_selected` | User confirms their chosen language on the language selection screen | `app/language-selection.tsx` |
| `lesson_continued` | User taps Continue button on the home screen to resume learning | `app/(tabs)/index.tsx` |
| `xp_earned` | User earns XP points from completing a learning activity | `store/progressStore.ts` |
| `lesson_completed` | User completes a lesson | `store/progressStore.ts` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/692691)
- [User Acquisition Funnel](/insights/8A5y0LDk) — Conversion from onboarding → signup → language selected → lesson started
- [New Sign-ups Over Time](/insights/Gg3Rz5KK) — Daily new user registrations
- [Daily Sign-ins](/insights/uYqibTOe) — Returning user activity
- [Language Selections](/insights/wUOCizXQ) — Users who complete the language setup step
- [Lesson Engagement](/insights/3t5jvGoJ) — Unique daily users tapping Continue to learn

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
