# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.

def secure_token
  token_file = Rails.root.join('.secret')
  if File.exist?(token_file)
    # Use the existing token.
    File.read(token_file).chomp
  else
    # Generate a new token and store it in token_file.
    token = SecureRandom.hex(64)
    File.write(token_file, token)
    token
  end
end

DrSite::Application.config.secret_key_base = secure_token

# Original key = 'e37f2591e3ba612c858dc0ba3b3e81d1bd969fcfa159ecbbf15bfa32f0f7123265c8c6726f49f7245bbe7850b65f18f813e9bf083b15784bd2b3337c89e2fce6'