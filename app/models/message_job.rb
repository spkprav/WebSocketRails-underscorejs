class MessageJob < Struct.new(:params)
  def perform
    100.times do |i|
      WebsocketRails[:new_posts].trigger(:posts_arrived, {text: params[:text] + i.to_s})
    end
  end
  def max_attempts
    3
  end
end
