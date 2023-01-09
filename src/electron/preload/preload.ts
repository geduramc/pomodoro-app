window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector: string, text: any): void => {
    const element = document.getElementById(selector)
    if (element != null) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})
