import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.BASE_URL || 'https://google.com';
const productsEndpoint = `${BASE_URL}/products`;


test.describe('TS-01: Positve Test API Products', () => {
  test('TC-P-01: Verify API Get All Product', async ({ request }) => {
    const response = await request.get(`${productsEndpoint}`);
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
  });
  test('TC-P-02: Verify API Get Product By Search', async ({ request }) => {
    const query = 'yonex';
    const response = await request.get(`${productsEndpoint}/search?q=${query}`);
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
  });
  test('TC-P-03: Verify API Get Product By Slug', async ({ request }) => {
    const productSlug = 'decathlon-kok-bulu-fsc-930-speed-77-x-12';
    const response = await request.get(`${productsEndpoint}/${productSlug}`);
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
  });
});

test.describe('TS-02: Negative Test API Product', () => {
  test('TC-N-01: Verify API Get Product By Invalid Slug', async ({ request }) => {
    const invalidProductSlug = 'invalid-slug';
    const response = await request.get(`${productsEndpoint}/${invalidProductSlug}`);
    expect(response.status()).toBe(404);
  });
});
