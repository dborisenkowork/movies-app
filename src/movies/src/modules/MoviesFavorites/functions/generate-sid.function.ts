export function generateSID(length: number = 32): string {
    if (length < 1) {
        throw new Error('Invalid length');
    } else {
        let text: string = '';
        const possible: string = 'abcdef0123456789';

        for (let i: number = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }
}
