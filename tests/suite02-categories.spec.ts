import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.BASE_URL || 'https://google.com';
const categoriesEndpoint = `${BASE_URL}/categories`;

test.describe('TS-03: Positve Test API Categories', () => {
  test('TC-P-04: Verify API Get All Categories', async ({ request }) => {
    const response = await request.get(`${categoriesEndpoint}`);
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
  });
  test('TC-P-05: Verify API Get Category By Slug', async ({ request }) => {
    const categorySlug = 'racket';
    const response = await request.get(`${categoriesEndpoint}/${categorySlug}`);
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
  });
});

test.describe('TS-04: Negative Test API Categories', () => {
  test('TC-N-02: Verify API Get category By Invalid Slug', async ({ request }) => {
    const invalidCategorySlug = 'invalid-slug';
    const response = await request.get(`${categoriesEndpoint}/${invalidCategorySlug}`);
    expect(response.status()).toBe(404);
  });
});
