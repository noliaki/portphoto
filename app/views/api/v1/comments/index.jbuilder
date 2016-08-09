json.array!(@comments) do |comment|
  json.id             comment.id
  json.content        comment.content
  json.commented_by   comment.user.name || comment.user.email
  json.updated_at     comment.updated_at
  json.created_at     comment.created_at
end
