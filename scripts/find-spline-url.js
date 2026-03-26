const embedUrl = "https://my.spline.design/cursorfollowinginteraction-XeoWISjCAWGN9FzXKYuFGa4S/"

try {
  const res = await fetch(embedUrl)
  const html = await res.text()
  
  // Print the LAST 3000 chars where the script tags typically are
  console.log("[v0] Page HTML (last 3000 chars):")
  console.log(html.substring(html.length - 3000))
  
  // Also look for ALL URLs in the page
  const allUrls = html.match(/https?:\/\/[^\s"'<>]+/g)
  if (allUrls) {
    console.log("\n[v0] All URLs found in page:")
    allUrls.forEach(url => console.log("  ", url))
  }
} catch (err) {
  console.log("[v0] Error:", err.message)
}
