'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Roles', [ {
            name: 'ADMIN',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'PHOTOGRAPHER',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            name: 'SUPPORTER',
            createdAt: new Date(),
            updatedAt: new Date()
        } ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Roles', null, {});
    }
};
