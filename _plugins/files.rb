Jekyll::Hooks.register :site, :post_write do |site|
  Dir.glob("files/*").each do |file|
    FileUtils.cp(file, site.dest)
  end
end
