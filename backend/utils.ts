export function get_dirname() {
    return __dirname.replace(/\\/g, '/');
}

export function get_cwd() {
    return process.cwd().replace(/\\/g, '/');
}