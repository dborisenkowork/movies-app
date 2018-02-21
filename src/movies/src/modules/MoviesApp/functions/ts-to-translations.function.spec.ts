import {tsToTranslations} from './ts-to-translations.function';

describe('MoviesApp/functions/ts-to-translations.function', () => {
    it('works correctly with empty translation', () => {
        const input: any = {};
        const output: any = {};

        expect(tsToTranslations(input)).toEqual(output);
    });

    it('works correctly with level-1 only tree', () => {
        const input: any = {
            'foo': 'bar',
            'bar': 'foo',
        };

        const output: any = {
            'foo': 'bar',
            'bar': 'foo',
        };

        expect(tsToTranslations(input)).toEqual(output);
    });

    it('works correctly with level-1 and level-2 tree', () => {
        const input: any = {
            foo: 'bar',
            bar: 'foo',
            baz: {
                bar: 'baz-bar',
            },
        };

        const output: any = {
            'foo': 'bar',
            'bar': 'foo',
            'baz.bar': 'baz-bar',
        };

        expect(tsToTranslations(input)).toEqual(output);
    });

    it('works correctly with mix of level-1, level-2 and level-3 tree', () => {
        const input: any = {
            foo: 'bar',
            bar: 'foo',
            baz: {
                bar: 'baz-bar',
                foo: 'baz-foo',
            },
            deep: {
                index: 'index-l2',
                we: {
                    go: {
                        index: 'index-l4',
                        ok: 'ok',
                    },
                },
            },
        };

        const output: any = {
            'foo': 'bar',
            'bar': 'foo',
            'baz.bar': 'baz-bar',
            'baz.foo': 'baz-foo',
            'deep.index': 'index-l2',
            'deep.we.go.index': 'index-l4',
            'deep.we.go.ok': 'ok',
        };

        expect(tsToTranslations(input)).toEqual(output);
    });
});
