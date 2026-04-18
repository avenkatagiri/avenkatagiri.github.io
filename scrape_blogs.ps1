$outDir = "assets/img/blogs"
if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

$files = Get-ChildItem "_posts\*.md"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ($content -match "external_url:\s*`"?([^`"\r\n]+)`"?") {
        $url = $matches[1]
        Write-Host "Scraping: $url"
        
        try {
            $req = Invoke-WebRequest -Uri $url -UseBasicParsing -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
            $html = $req.Content
            
            if ($html -match '<meta\s+property="og:image"\s+content="(.*?)"') {
                $imgUrl = $matches[1]
                $imgUrl = $imgUrl -replace '&amp;', '&'
                
                $basename = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
                $localImg = "/assets/img/blogs/$basename.png"
                
                Invoke-WebRequest -Uri $imgUrl -OutFile ".$localImg" -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36" | Out-Null
                
                # Check if image: is already in front matter, if not inject it
                if ($content -notmatch "image:") {
                    $content = $content -replace "(---.*?layout:[^\r\n]*)", "`$1`r`nimage: $localImg"
                    [IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
                }
                Write-Host "Saved image for $basename"
            } else {
                Write-Host "No og:image found for $url"
            }
        } catch {
            Write-Host "Failed for $url"
            Write-Host $_.Exception.Message
        }
    }
}
Write-Host "Done"
