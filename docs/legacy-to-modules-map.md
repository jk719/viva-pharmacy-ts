# Legacy to Modular Migration Map

This document maps legacy project files and folders to their new homes in the modular TypeScript structure. Use the checklists below to track migration progress for each feature/module.

---

## Orders Feature

### Mapping Checklist

- [ ] Move `app/actions/orders.js` → `modules/orders/actions/orders.ts`
- [ ] Move all files from `app/admin/orders/` → `modules/orders/admin/`
- [ ] Move all files from `app/api/orders/` → `modules/orders/api/`
- [ ] Move all files from `lib/orders/` → `modules/orders/lib/` (unless shared, see below)
- [ ] Move `components/admin/OrderAnalytics.js` → `modules/orders/components/OrderAnalytics.tsx`
- [ ] Move `components/admin/OrderDetailsView.js` → `modules/orders/components/OrderDetailsView.tsx`
- [ ] Move `components/admin/OrderManagement.js` → `modules/orders/components/OrderManagement.tsx`
- [ ] Move `components/admin/OrderNotes.js` → `modules/orders/components/OrderNotes.tsx`
- [ ] Move `components/admin/OrderStats.js` → `modules/orders/components/OrderStats.tsx`
- [ ] If any utility functions in `lib/orders/` or `components/admin/Order*` are used by multiple modules, move those to `core/utils/orders.ts` and export via barrel file.
- [ ] Move any shared TypeScript types/interfaces to `core/types/orderTypes.ts`.
- [ ] Move or convert any test files for orders (e.g., `route.test.js`) → `modules/orders/tests/`.

### Migration Steps

1. Prepare `modules/orders/` with subfolders: `actions/`, `admin/`, `api/`, `components/`, `lib/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types`.
4. Move/convert tests to `modules/orders/tests/`.
5. Remove duplicate code and dead weight.
6. Update imports to use new paths/barrels.
7. Run type-check, lint, and tests.
8. Check off items here and in `/docs/migration-progress.md`.

---

## Loyalty Feature

### Mapping Checklist

- [ ] Move all files from `app/admin/loyalty/` → `modules/loyalty/admin/`
- [ ] Move all files from `app/api/loyalty/` → `modules/loyalty/api/`
- [ ] Move `components/admin/LoyaltyAnalytics.js` → `modules/loyalty/components/LoyaltyAnalytics.tsx`
- [ ] Move `components/admin/LoyaltyManagement.js` → `modules/loyalty/components/LoyaltyManagement.tsx`
- [ ] Move all files from `components/loyalty/` → `modules/loyalty/components/loyalty/`
- [ ] Move all files from `lib/loyalty/` → `modules/loyalty/lib/` (unless shared, see below)
- [ ] If any utility functions in `lib/loyalty/` or `components/loyalty/` are used by multiple modules, move those to `core/utils/loyalty.ts` and export via barrel file.
- [ ] Move any shared TypeScript types/interfaces to `core/types/loyaltyTypes.ts`.
- [ ] Move or convert any loyalty-related test files → `modules/loyalty/tests/`.

### Migration Steps

1. Prepare `modules/loyalty/` with subfolders: `admin/`, `api/`, `components/`, `lib/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types`.
4. Move/convert tests to `modules/loyalty/tests/`.
5. Remove duplicate code and dead weight.
6. Update imports to use new paths/barrels.
7. Run type-check, lint, and tests.
8. Check off items here and in `/docs/migration-progress.md`.

---

---

## Prescriptions Feature

### Mapping Checklist

- [ ] Move all files from `app/admin/prescriptions/` → `modules/prescriptions/admin/`
- [ ] Move all files from `app/api/prescriptions/` → `modules/prescriptions/api/`
- [ ] Move all files from `components/admin/` related to prescriptions (e.g., `PrescriptionManagement.js`) → `modules/prescriptions/components/`
- [ ] Move all files from `components/prescriptions/` → `modules/prescriptions/components/prescriptions/`
- [ ] Move all files from `lib/prescriptions/` → `modules/prescriptions/lib/` (unless shared, see below)
- [ ] If any utility functions in `lib/prescriptions/` or `components/prescriptions/` are used by multiple modules, move those to `core/utils/prescriptions.ts` and export via barrel file.
- [ ] Move any shared TypeScript types/interfaces to `core/types/prescriptionTypes.ts`.
- [ ] Move or convert any prescriptions-related test files → `modules/prescriptions/tests/`.

### Migration Steps

1. Prepare `modules/prescriptions/` with subfolders: `admin/`, `api/`, `components/`, `lib/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types`.
4. Move/convert tests to `modules/prescriptions/tests/`.
5. Remove duplicate code and dead weight.
6. Update imports to use new paths/barrels.
7. Run type-check, lint, and tests.
8. Check off items here and in `/docs/migration-progress.md`.

---

## Products Feature

### Mapping Checklist

- [ ] Move all files from `app/admin/products/` → `modules/products/admin/`
- [ ] Move all files from `app/api/products/` → `modules/products/api/`
- [ ] Move all files from `components/admin/` related to products (e.g., `ProductManagement.js`, `ProductCategoryBrowser.js`, `ProductEditHistory.js`) → `modules/products/components/`
- [ ] Move all files from `components/products/` → `modules/products/components/products/`
- [ ] Move all files from `lib/products/` → `modules/products/lib/` (unless shared, see below)
- [ ] If any utility functions in `lib/products/` or `components/products/` are used by multiple modules, move those to `core/utils/products.ts` and export via barrel file.
- [ ] Move any shared TypeScript types/interfaces to `core/types/productTypes.ts`.
- [ ] Move or convert any products-related test files → `modules/products/tests/`.

### Migration Steps

1. Prepare `modules/products/` with subfolders: `admin/`, `api/`, `components/`, `lib/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types`.
4. Move/convert tests to `modules/products/tests/`.
5. Remove duplicate code and dead weight.
6. Update imports to use new paths/barrels.
7. Run type-check, lint, and tests.
8. Check off items here and in `/docs/migration-progress.md`.

---

## Core/Shared Utilities

### Mapping Checklist

- [ ] Move all shared or cross-module utility functions from `lib/`, `components/`, or `scripts/utils/` to `core/utils/` (with one file per domain, e.g., `orders.ts`, `loyalty.ts`, `prescriptions.ts`, `products.ts`).
- [ ] Move all shared or cross-module types/interfaces to `core/types/` (with one file per domain, e.g., `orderTypes.ts`, `loyaltyTypes.ts`, etc.).
- [ ] Move all shared components (e.g., `components/common/`, `components/shared/`, `components/context/`, etc.) to `core/components/`.
- [ ] Move or convert any shared tests to `core/tests/` if needed.

### Migration Steps

1. Prepare `core/` with subfolders: `components/`, `types/`, `utils/` (already present).
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor code to maximize reuse and minimize duplication.
4. Update barrel exports in each folder.
5. Update imports in all modules to use the new core paths/barrels.
6. Run type-check, lint, and tests.
7. Check off items here and in `/docs/migration-progress.md`.

---

---

## Authentication Feature

### Mapping Checklist

- [ ] Move all files from `app/api/auth/` → `modules/authentication/api/`
- [ ] Move all files from `lib/auth/` and `lib/auth.js` → `modules/authentication/lib/` (unless shared, see below)
- [ ] Move all files from `components/auth/` → `modules/authentication/components/`
- [ ] Move any authentication-related pages (e.g., `app/forgot-password/`, `app/register/`, `app/reset-password/`, `app/verify-email/`) → `modules/authentication/pages/`
- [ ] If any utility functions in `lib/auth/` or `components/auth/` are used by multiple modules, move those to `core/utils/authentication.ts` and export via barrel file.
- [ ] Move any shared TypeScript types/interfaces to `core/types/authenticationTypes.ts`.
- [ ] Move or convert any authentication-related test files → `modules/authentication/tests/`.

### Migration Steps

1. Prepare `modules/authentication/` with subfolders: `api/`, `components/`, `lib/`, `pages/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types`.
4. Move/convert tests to `modules/authentication/tests/`.
5. Remove duplicate code and dead weight.
6. Update imports to use new paths/barrels.
7. Run type-check, lint, and tests.
8. Check off items here and in `/docs/migration-progress.md`.

---

## Profile/User Feature

### Mapping Checklist

- [ ] Move all files from `app/profile/` → `modules/profile/pages/`
- [ ] Move all files from `components/profile/` → `modules/profile/components/`
- [ ] Move all files from `lib/profile/` (if any) → `modules/profile/lib/` (unless shared, see below)
- [ ] If any utility functions in `lib/profile/` or `components/profile/` are used by multiple modules, move those to `core/utils/profile.ts` and export via barrel file.
- [ ] Move any shared TypeScript types/interfaces to `core/types/profileTypes.ts`.
- [ ] Move or convert any profile-related test files → `modules/profile/tests/`.

### Migration Steps

1. Prepare `modules/profile/` with subfolders: `components/`, `lib/`, `pages/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types`.
4. Move/convert tests to `modules/profile/tests/`.
5. Remove duplicate code and dead weight.
6. Update imports to use new paths/barrels.
7. Run type-check, lint, and tests.
8. Check off items here and in `/docs/migration-progress.md`.

---

## Payments Feature

### Mapping Checklist

- [ ] Move all files from `app/api/payments/` → `modules/payments/api/`
- [ ] Move all files from `lib/payments/` → `modules/payments/lib/` (unless shared, see below)
- [ ] Move all files from `components/payments/` (if any) → `modules/payments/components/`
- [ ] If any utility functions in `lib/payments/` or `components/payments/` are used by multiple modules, move those to `core/utils/payments.ts` and export via barrel file.
- [ ] Move any shared TypeScript types/interfaces to `core/types/paymentTypes.ts`.
- [ ] Move or convert any payments-related test files → `modules/payments/tests/`.

### Migration Steps

1. Prepare `modules/payments/` with subfolders: `api/`, `components/`, `lib/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types`.
4. Move/convert tests to `modules/payments/tests/`.
5. Remove duplicate code and dead weight.
6. Update imports to use new paths/barrels.
7. Run type-check, lint, and tests.
8. Check off items here and in `/docs/migration-progress.md`.

---

## Email System Feature

### Mapping Checklist

- [ ] Move all files from `lib/email/` → `modules/email/lib/` (unless shared, see below)
- [ ] Move all files from `components/emails/` → `modules/email/components/`
- [ ] Move all files from `app/api/email/` or `app/api/email-system/` (if any) → `modules/email/api/`
- [ ] If any utility functions in `lib/email/` or `components/emails/` are used by multiple modules, move those to `core/utils/email.ts` and export via barrel file.
- [ ] Move any shared TypeScript types/interfaces to `core/types/emailTypes.ts`.
- [ ] Move or convert any email-related test files → `modules/email/tests/`.

### Migration Steps

1. Prepare `modules/email/` with subfolders: `api/`, `components/`, `lib/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types`.
4. Move/convert tests to `modules/email/tests/`.
5. Remove duplicate code and dead weight.
6. Update imports to use new paths/barrels.
7. Run type-check, lint, and tests.
8. Check off items here and in `/docs/migration-progress.md`.

---

---

## Analytics Feature

### Mapping Checklist

- [ ] Move all files from `lib/analytics/` → `modules/analytics/lib/`
- [ ] Move all files from `components/analytics/` → `modules/analytics/components/`
- [ ] If any utility functions in `lib/analytics/` or `components/analytics/` are used by multiple modules, move those to `core/utils/analytics.ts` and export via barrel file.
- [ ] Move any shared TypeScript types/interfaces to `core/types/analyticsTypes.ts`.
- [ ] Move or convert any analytics-related test files → `modules/analytics/tests/`.

### Migration Steps

1. Prepare `modules/analytics/` with subfolders: `components/`, `lib/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types`.
4. Move/convert tests to `modules/analytics/tests/`.
5. Remove duplicate code and dead weight.
6. Update imports to use new paths/barrels.
7. Run type-check, lint, and tests.
8. Check off items here and in `/docs/migration-progress.md`.

---

## Notifications Feature

### Mapping Checklist

- [ ] Move all files from `lib/notifications/` → `modules/notifications/lib/`
- [ ] Move all files from `components/notifications/` (if any) → `modules/notifications/components/`
- [ ] If any utility functions in `lib/notifications/` or `components/notifications/` are used by multiple modules, move those to `core/utils/notifications.ts` and export via barrel file.
- [ ] Move any shared TypeScript types/interfaces to `core/types/notificationTypes.ts`.
- [ ] Move or convert any notifications-related test files → `modules/notifications/tests/`.

### Migration Steps

1. Prepare `modules/notifications/` with subfolders: `components/`, `lib/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types`.
4. Move/convert tests to `modules/notifications/tests/`.
5. Remove duplicate code and dead weight.
6. Update imports to use new paths/barrels.
7. Run type-check, lint, and tests.
8. Check off items here and in `/docs/migration-progress.md`.

---

## Pharmacy Feature

### Mapping Checklist

- [ ] Move all files from `app/api/pharmacy/` → `modules/pharmacy/api/`
- [ ] Move all files from `components/pharmacy/` → `modules/pharmacy/components/`
- [ ] Move all files from `lib/pharmacy.js` → `modules/pharmacy/lib/` (unless shared, see below)
- [ ] If any utility functions in `lib/pharmacy.js` or `components/pharmacy/` are used by multiple modules, move those to `core/utils/pharmacy.ts` and export via barrel file.
- [ ] Move any shared TypeScript types/interfaces to `core/types/pharmacyTypes.ts`.
- [ ] Move or convert any pharmacy-related test files → `modules/pharmacy/tests/`.

### Migration Steps

1. Prepare `modules/pharmacy/` with subfolders: `api/`, `components/`, `lib/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types`.
4. Move/convert tests to `modules/pharmacy/tests/`.
5. Remove duplicate code and dead weight.
6. Update imports to use new paths/barrels.
7. Run type-check, lint, and tests.
8. Check off items here and in `/docs/migration-progress.md`.

---

## Admin Feature

### Mapping Checklist

- [ ] Move all files from `app/admin/` (excluding subfolders already mapped to other modules) → `modules/admin/pages/`
- [ ] Move all files from `components/admin/` (excluding files already mapped to other modules) → `modules/admin/components/`
- [ ] Move all admin-specific utilities from `lib/` or `scripts/` → `modules/admin/lib/`
- [ ] If any utility functions in `modules/admin/lib/` or `modules/admin/components/` are used by multiple modules, move those to `core/utils/admin.ts` and export via barrel file.
- [ ] Move any shared TypeScript types/interfaces to `core/types/adminTypes.ts`.
- [ ] Move or convert any admin-related test files → `modules/admin/tests/`.

### Migration Steps

1. Prepare `modules/admin/` with subfolders: `components/`, `lib/`, `pages/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types`.
4. Move/convert tests to `modules/admin/tests/`.
5. Remove duplicate code and dead weight.
6. Update imports to use new paths/barrels.
7. Run type-check, lint, and tests.
8. Check off items here and in `/docs/migration-progress.md`.

---

---

## Cart Feature

### Mapping Checklist

- [ ] Move all files from `app/cart/` → `modules/cart/pages/`
- [ ] Move all files from `components/ClientCartIcon.js` and related cart UI → `modules/cart/components/`
- [ ] Move or convert any cart-related test files → `modules/cart/tests/`

### Migration Steps

1. Prepare `modules/cart/` with subfolders: `components/`, `pages/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types` if needed.
4. Update imports to use new paths/barrels.
5. Run type-check, lint, and tests.
6. Check off items here and in `/docs/migration-progress.md`.

---

## Checkout Feature

### Mapping Checklist

- [ ] Move all files from `app/checkout/` → `modules/checkout/pages/`
- [ ] Move all files from `components/checkout/` → `modules/checkout/components/`
- [ ] Move or convert any checkout-related test files → `modules/checkout/tests/`

### Migration Steps

1. Prepare `modules/checkout/` with subfolders: `components/`, `pages/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types` if needed.
4. Update imports to use new paths/barrels.
5. Run type-check, lint, and tests.
6. Check off items here and in `/docs/migration-progress.md`.

---

## Categories Feature

### Mapping Checklist

- [ ] Move all files from `app/categories/` and `lib/categories.js` → `modules/categories/pages/` and `modules/categories/lib/`
- [ ] Move all files from `components/categories/` → `modules/categories/components/`
- [ ] Move or convert any categories-related test files → `modules/categories/tests/`

### Migration Steps

1. Prepare `modules/categories/` with subfolders: `components/`, `lib/`, `pages/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types` if needed.
4. Update imports to use new paths/barrels.
5. Run type-check, lint, and tests.
6. Check off items here and in `/docs/migration-progress.md`.

---

## SSE/Real-time Feature

### Mapping Checklist

- [ ] Move `lib/sseManager.js` → `modules/sse/lib/sseManager.ts`
- [ ] Move `components/SSEProvider.js` → `modules/sse/components/SSEProvider.tsx`
- [ ] Move or convert any SSE-related test files → `modules/sse/tests/`

### Migration Steps

1. Prepare `modules/sse/` with subfolders: `components/`, `lib/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types` if needed.
4. Update imports to use new paths/barrels.
5. Run type-check, lint, and tests.
6. Check off items here and in `/docs/migration-progress.md`.

---

## Stripe/Payments Extensions Feature

### Mapping Checklist

- [ ] Move all files from `lib/stripe/` → `modules/payments/stripe/`
- [ ] Move or convert any stripe-related test files → `modules/payments/tests/`

### Migration Steps

1. Prepare `modules/payments/stripe/` and `modules/payments/tests/` as needed.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types` if needed.
4. Update imports to use new paths/barrels.
5. Run type-check, lint, and tests.
6. Check off items here and in `/docs/migration-progress.md`.

---

## SMS Feature

### Mapping Checklist

- [ ] Move all files from `lib/sms/` → `modules/sms/lib/`
- [ ] Move or convert any sms-related test files → `modules/sms/tests/`

### Migration Steps

1. Prepare `modules/sms/` with subfolders: `lib/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types` if needed.
4. Update imports to use new paths/barrels.
5. Run type-check, lint, and tests.
6. Check off items here and in `/docs/migration-progress.md`.

---

## Tax Feature

### Mapping Checklist

- [ ] Move all files from `lib/tax/` → `modules/tax/lib/`
- [ ] Move or convert any tax-related test files → `modules/tax/tests/`

### Migration Steps

1. Prepare `modules/tax/` with subfolders: `lib/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types` if needed.
4. Update imports to use new paths/barrels.
5. Run type-check, lint, and tests.
6. Check off items here and in `/docs/migration-progress.md`.

---

## Tracking Feature

### Mapping Checklist

- [ ] Move all files from `lib/tracking/` → `modules/tracking/lib/`
- [ ] Move or convert any tracking-related test files → `modules/tracking/tests/`

### Migration Steps

1. Prepare `modules/tracking/` with subfolders: `lib/`, `tests/`.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types` if needed.
4. Update imports to use new paths/barrels.
5. Run type-check, lint, and tests.
6. Check off items here and in `/docs/migration-progress.md`.

---

## Context Providers Feature

### Mapping Checklist

- [ ] Move all files from `components/context/` and `context/` → `core/components/context/`
- [ ] Move or convert any context-related test files → `core/tests/context/`

### Migration Steps

1. Prepare `core/components/context/` and `core/tests/context/` as needed.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types` if needed.
4. Update imports to use new paths/barrels.
5. Run type-check, lint, and tests.
6. Check off items here and in `/docs/migration-progress.md`.

---

## UI/UX Shared Feature

### Mapping Checklist

- [ ] Move all files from `components/common/`, `components/shared/`, `components/Breadcrumbs.js`, etc. → `core/components/shared/`
- [ ] Move or convert any shared UI/UX test files → `core/tests/shared/`

### Migration Steps

1. Prepare `core/components/shared/` and `core/tests/shared/` as needed.
2. Move and convert files as above, converting to TypeScript where needed.
3. Refactor shared code to `core/utils` or `core/types` if needed.
4. Update imports to use new paths/barrels.
5. Run type-check, lint, and tests.
6. Check off items here and in `/docs/migration-progress.md`.

---

## Public/Static Assets

### Mapping Checklist

- [ ] Organize all files from `public/` and `components/images/` as needed in the new structure (usually stays at project root or in a `public/` folder).
- [ ] Move or convert any static asset-related test files → `core/tests/assets/` if needed.

### Migration Steps

1. Ensure `public/` is properly organized and referenced in the new structure.
2. Move/convert tests if needed.
3. Update references/paths in code.
4. Check off items here and in `/docs/migration-progress.md`.

---

## Data/Seeders Feature

### Mapping Checklist

- [ ] Move all files from `data/` → `core/data/` or `modules/data/` as appropriate.
- [ ] Move or convert any data/seeder-related test files → `core/tests/data/`

### Migration Steps

1. Prepare `core/data/` or `modules/data/` as needed.
2. Move and convert files as above, converting to TypeScript where needed.
3. Update imports and references in code.
4. Run type-check, lint, and tests.
5. Check off items here and in `/docs/migration-progress.md`.

---

## Scripts/Utilities Feature

### Mapping Checklist

- [ ] Move all files from `scripts/` and `scripts/utils/` → `core/scripts/` or `modules/scripts/` as appropriate.
- [ ] Move or convert any script-related test files → `core/tests/scripts/`

### Migration Steps

1. Prepare `core/scripts/` or `modules/scripts/` as needed.
2. Move and convert files as above, converting to TypeScript where needed.
3. Update imports and references in code.
4. Run type-check, lint, and tests.
5. Check off items here and in `/docs/migration-progress.md`.

---

## Middleware Feature

### Mapping Checklist

- [ ] Move `middleware.js` → `core/middleware/middleware.ts` or appropriate folder.
- [ ] Move or convert any middleware-related test files → `core/tests/middleware/`

### Migration Steps

1. Prepare `core/middleware/` and `core/tests/middleware/` as needed.
2. Move and convert files as above, converting to TypeScript where needed.
3. Update imports and references in code.
4. Run type-check, lint, and tests.
5. Check off items here and in `/docs/migration-progress.md`.

---

## Models Feature

### Mapping Checklist

- [ ] Move all files from `models/` → `core/models/` or `modules/models/` as appropriate.
- [ ] Move or convert any model-related test files → `core/tests/models/`

### Migration Steps

1. Prepare `core/models/` or `modules/models/` as needed.
2. Move and convert files as above, converting to TypeScript where needed.
3. Update imports and references in code.
4. Run type-check, lint, and tests.
5. Check off items here and in `/docs/migration-progress.md`.

---

## Hooks Feature

### Mapping Checklist

- [ ] Move all files from `hooks/` and `lib/hooks/` → `core/hooks/`
- [ ] Move or convert any hook-related test files → `core/tests/hooks/`

### Migration Steps

1. Prepare `core/hooks/` and `core/tests/hooks/` as needed.
2. Move and convert files as above, converting to TypeScript where needed.
3. Update imports and references in code.
4. Run type-check, lint, and tests.
5. Check off items here and in `/docs/migration-progress.md`.

---

## Error Handling Feature

### Mapping Checklist

- [ ] Move all files from `lib/errors/` → `core/errors/`
- [ ] Move all files from `components/common/ErrorBoundary.js` → `core/components/ErrorBoundary.tsx`
- [ ] Move or convert any error-handling-related test files → `core/tests/errors/`

### Migration Steps

1. Prepare `core/errors/`, `core/components/`, and `core/tests/errors/` as needed.
2. Move and convert files as above, converting to TypeScript where needed.
3. Update imports and references in code.
4. Run type-check, lint, and tests.
5. Check off items here and in `/docs/migration-progress.md`.

---

## Health Blog/Content Feature

### Mapping Checklist

- [ ] Move all files from `components/HealthBlog.js`, `components/slides/`, etc. → `modules/content/components/` or `core/components/content/`
- [ ] Move or convert any content-related test files → `modules/content/tests/`

### Migration Steps

1. Prepare `modules/content/components/` and `modules/content/tests/` as needed.
2. Move and convert files as above, converting to TypeScript where needed.
3. Update imports and references in code.
4. Run type-check, lint, and tests.
5. Check off items here and in `/docs/migration-progress.md`.

---

## Test/Email Templates Feature

### Mapping Checklist

- [ ] Move all files from `test-emails/`, `components/emails/`, `lib/email/sampleData.js` → `modules/email/templates/` or `core/email/templates/`
- [ ] Move or convert any template-related test files → `modules/email/tests/`

### Migration Steps

1. Prepare `modules/email/templates/`, `core/email/templates/`, and `modules/email/tests/` as needed.
2. Move and convert files as above, converting to TypeScript where needed.
3. Update imports and references in code.
4. Run type-check, lint, and tests.
5. Check off items here and in `/docs/migration-progress.md`.

---

## Miscellaneous/Other Feature

### Mapping Checklist

- [ ] Review any files/folders not explicitly mapped above and determine their best modular/core home.
- [ ] Move or convert any remaining files as appropriate.

### Migration Steps

1. Review the project for unmapped files.
2. Move and convert files as above, converting to TypeScript where needed.
3. Update imports and references in code.
4. Run type-check, lint, and tests.
5. Check off items here and in `/docs/migration-progress.md`.

---

(Add new sections for additional modules/features as needed.)
