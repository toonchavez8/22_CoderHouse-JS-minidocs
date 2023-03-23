const MENUBTN = document.querySelector(".menu");
const SIDEBAR = document.querySelector("#sideBar");

const BODYWRAPPER = document.querySelector(".body-wrapper");

MENUBTN.addEventListener("click", () => {
	// toggle the class "opened" on the menu button
	MENUBTN.classList.toggle("opened");
	// set the aria-expanded attribute to true if the menu button has the class "opened"
	MENUBTN.setAttribute("aria-expanded", MENUBTN.classList.contains("opened"));

	// if the menu button has the class "opened" then move the sidebar in view
	if (MENUBTN.classList.contains("opened")) {
		SIDEBAR.style.transform = "translateX(0)";
		// otherwise move the sidebar out of view
		BODYWRAPPER.classList.remove("sidebar-open");
	} else {
		SIDEBAR.style.transform = "translateX(-76%)";
		BODYWRAPPER.classList.add("sidebar-open");
	}
});
