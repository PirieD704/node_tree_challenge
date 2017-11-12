//retrieves the factory nodes in order of creation
exports.factory_nodes = "SELECT name, id FROM factory_nodes ORDER BY id"

//retrieves the children for a given parent node along with their relative position
exports.factory_children = "SELECT value, parent_child_order FROM factory_children WHERE parent_id = ?"