###
# Script to process (resize, clone) images
#
# Run from insite repo root (aherman.github.io)
###

# Resize with max height
resizeMaxHeight()
{
  # DEFAULT_MAX_HEIGHT=1024
  MAX_HEIGHT=${1:-1024}
  echo "resizeMaxHeight(x$MAX_HEIGHT) : start"

  for ext in "${imageFileTypeArray[@]}"
  do
     echo "Processing .$ext files..."
       convert "*.$ext[x$MAX_HEIGHT>]" -set filename:base "%[base]" "%[filename:base].$ext"
     # or do whatever with individual element of the array
  done
  echo "resizeMaxHeight: end"
  echo "###"
}

# Make thumbnails
makeThumbnails()
{
  # DEFAULT_WIDTH=300
  WIDTH=${1:-300}
  echo "makeThumbnails(x$WIDTH) : start"

  for ext in "${imageFileTypeArray[@]}"
  do
     echo "Processing .$ext files..."
       mogrify -path thumbnail/ -resize "$WIDTH"x *.$ext
     # or do whatever with individual element of the array
  done

  echo "makeThumbnails : end"
  echo "###"
}

mainFunction()
{
  # The image filetypes to process
  declare -a imageFileTypeArray=("png" "jpg" "gif")

  cd assets/images/categories

  # Category - Gallery
  echo "Category - Gallery..."
  cd gallery
  resizeMaxHeight
  makeThumbnails

  # Category - Gaia Shrine
  echo "Category - Gaia Shrine..."
  cd ../gaia-shrine
  resizeMaxHeight
  makeThumbnails
}

# Call mainFunction
mainFunction

###
