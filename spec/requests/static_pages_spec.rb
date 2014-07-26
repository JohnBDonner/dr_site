require 'spec_helper'

describe "StaticPages" do
  
  describe "Home page" do

  	it "should have the content 'DR 2015'" do
  		visit '/static_pages/home'
  		expect(page).to have_content('DR 2015')
  	end
  end

  describe "About page" do

  	it "should have the content 'About'" do
  		visit '/static_pages/about'
  		expect(page).to have_content('About')
  	end
  end

  describe "Donate page" do

  	it "should have the content 'Donate'" do
  		visit '/static_pages/donate'
  		expect(page).to have_content('Donate')
  	end
  end

end
