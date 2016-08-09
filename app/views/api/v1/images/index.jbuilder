json.array!(@images) do |image|
  json.id             image.id
  json.title          image.title
  json.description    image.description
  json.url            image.file.url
  json.thumb_url      image.file.thumb.url
  json.comments_count image.comments_count
  json.uploaded_by do
    json.user_name image.user.username
  end

  json.stars_count     image.stars_count
  json.starred_by_user image.starred_by_user?(current_user)
end
