WebsocketRails::EventMap.describe do
  subscribe :posts_arrived, 'events#new_post'
end
