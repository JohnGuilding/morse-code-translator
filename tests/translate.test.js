import { translateToMorse, translateToEnglish } from "../scripts/translate";

// Valid inputs
it ('should be 1', () => {
    expect(1).toBe(1);
});

it('should translate to .-', () => {
    const translation = translateToMorse('A')
    expect(translation).toBe('.-')
});

it('should translate to .... . .-.. .-.. ---   .-- --- .-. .-.. -..', () => {
    const translation = translateToMorse('hello world')
    expect(translation).toBe('.... . .-.. .-.. ---   .-- --- .-. .-.. -..')
});

it('should translate to .... --- .--   -- ..- -.-. ....   .-- --- --- -..   .-- --- ..- .-.. -..   .-   .-- --- --- -.. -.-. .... ..- -.-. -.-   -.-. .... ..- -.-. -.-   .. ..-.   .-   .-- --- --- -.. -.-. .... ..- -.-. -.-   -.-. --- ..- .-.. -..   -.-. .... ..- -.-. -.-   .-- --- --- -..', () => {
    const translation = translateToMorse('how much wood would a woodchuck chuck if a woodchuck could chuck wood')
    expect(translation).toBe('.... --- .--   -- ..- -.-. ....   .-- --- --- -..   .-- --- ..- .-.. -..   .-   .-- --- --- -.. -.-. .... ..- -.-. -.-   -.-. .... ..- -.-. -.-   .. ..-.   .-   .-- --- --- -.. -.-. .... ..- -.-. -.-   -.-. --- ..- .-.. -..   -.-. .... ..- -.-. -.-   .-- --- --- -..')
});

it('should translate to a', () => {
    const translation = translateToEnglish('.-')
    expect(translation).toBe('a')
});

it('should translate to hello world', () => {
    const translation = translateToEnglish('.... . .-.. .-.. ---   .-- --- .-. .-.. -..')
    expect(translation).toBe('hello world')
});

it('should translate to how much wood would a woodchuck chuck if a woodchuck could chuck wood', () => {
    const translation = translateToEnglish('.... --- .--   -- ..- -.-. ....   .-- --- --- -..   .-- --- ..- .-.. -..   .-   .-- --- --- -.. -.-. .... ..- -.-. -.-   -.-. .... ..- -.-. -.-   .. ..-.   .-   .-- --- --- -.. -.-. .... ..- -.-. -.-   -.-. --- ..- .-.. -..   -.-. .... ..- -.-. -.-   .-- --- --- -..')
    expect(translation).toBe('how much wood would a woodchuck chuck if a woodchuck could chuck wood')
});
