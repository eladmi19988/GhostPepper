import { describe, expect, it } from 'vitest';
import { getDirection, getMessage, languages } from './i18n';
describe('localization foundation', () => {
  it('sets RTL only for Hebrew and Arabic', () => { expect(getDirection('he')).toBe('rtl'); expect(getDirection('ar')).toBe('rtl'); expect(getDirection('en')).toBe('ltr'); });
  it('provides translations and a safe English fallback', () => { expect(getMessage('he','welcome')).toBe('ברוכים הבאים ל-GhostPepper'); expect(getMessage('fr','welcome')).toBe('Bienvenue sur GhostPepper'); expect(getMessage('xx','welcome')).toBe('Welcome to GhostPepper'); });
  it('exposes the planned 14 starter languages', () => { expect(languages).toHaveLength(14); });
});
