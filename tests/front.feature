Feature: Front page

	As a user
	I want to see the front page
	So that I can verify the application works

	@js @nojs
	Scenario: Viewing the front page
		Given I visit "/"
		Then I should see a "Svelte" heading
		And the tests should work

	@dark @light @todo
	Scenario: Front page accessibility
		Given I visit "/"
		Then all accessibility tests should pass
